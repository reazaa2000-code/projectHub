import React, { useState, useEffect, useRef } from "react";
import { Plus, Pin, Save, Loader2, X, RotateCcw, Pencil, Check } from "lucide-react";

// ---- پیکربندی ستون‌ها -------------------------------------------------
const COLUMNS = [
  {
    key: "pending",
    title: "در حال انتظار",
    accent: "#D98A3D",
    soft: "#FBF0DF",
    dot: "#D98A3D",
  },
  {
    key: "inProgress",
    title: "در حال انجام",
    accent: "#3E93A6",
    soft: "#E3F1F3",
    dot: "#3E93A6",
  },
  {
    key: "done",
    title: "پایان یافته",
    accent: "#5C9A5A",
    soft: "#E9F3E7",
    dot: "#5C9A5A",
  },
];

const seedTasks = () => [
  { id: "t1", title: "طراحی رابط کاربری داشبورد", note: "نسخه اول را برای تیم بفرست", column: "pending" },
  { id: "t2", title: "نوشتن مستندات API", note: "", column: "pending" },
  { id: "t3", title: "پیاده‌سازی فرم ورود", note: "اعتبارسنجی شماره موبایل", column: "inProgress" },
  { id: "t4", title: "تست عملکرد سرور", note: "بار ترافیکی بالا را بررسی کن", column: "inProgress" },
  { id: "t5", title: "راه‌اندازی محیط توسعه", note: "", column: "done" },
];

const STORAGE_KEY = "kanban:tasks:v1";
const uid = () => `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

export default function TaskBoard() {
  const [tasks, setTasks] = useState(seedTasks());
  const [newTitle, setNewTitle] = useState("");
  const [newColumn, setNewColumn] = useState("pending");
  const [draggedId, setDraggedId] = useState(null);
  const [dragOverCol, setDragOverCol] = useState(null);
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | loading | saving | saved | error
  const [loaded, setLoaded] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editDraft, setEditDraft] = useState({ title: "", note: "" });
  const timeoutRef = useRef(null);

  // ---- بارگذاری اولیه از حافظهٔ ابزار ----------------------------------
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setStatus({ state: "loading", message: "در حال بارگذاری تسک‌ها…" });
      try {
        const result = await window.storage.get(STORAGE_KEY, false);
        if (!cancelled && result && result.value) {
          const parsed = JSON.parse(result.value);
          if (Array.isArray(parsed) && parsed.length > 0) setTasks(parsed);
        }
        if (!cancelled) setStatus({ state: "idle", message: "" });
      } catch (err) {
        // کلید هنوز وجود ندارد یا خطای دیگری رخ داده — از دادهٔ نمونه استفاده می‌کنیم
        if (!cancelled) setStatus({ state: "idle", message: "" });
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const flashStatus = (state, message, ms = 2200) => {
    setStatus({ state, message });
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (ms) {
      timeoutRef.current = setTimeout(() => setStatus({ state: "idle", message: "" }), ms);
    }
  };

  const handleSave = async () => {
    setStatus({ state: "saving", message: "در حال ذخیره…" });
    try {
      const result = await window.storage.set(STORAGE_KEY, JSON.stringify(tasks), false);
      if (result) {
        flashStatus("saved", "با موفقیت ذخیره شد ✓");
      } else {
        flashStatus("error", "ذخیره‌سازی ناموفق بود، دوباره تلاش کن.");
      }
    } catch (err) {
      flashStatus("error", "خطا در ذخیره‌سازی. دوباره تلاش کن.");
    }
  };

  const handleReset = async () => {
    const fresh = seedTasks();
    setTasks(fresh);
    try {
      await window.storage.set(STORAGE_KEY, JSON.stringify(fresh), false);
      flashStatus("saved", "به حالت پیش‌فرض بازگشت");
    } catch (err) {
      flashStatus("error", "بازنشانی ذخیره نشد.");
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    const title = newTitle.trim();
    if (!title) return;
    setTasks((prev) => [...prev, { id: uid(), title, note: "", column: newColumn }]);
    setNewTitle("");
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const moveTask = (id, column) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, column } : t)));
  };

  // ---- Drag & Drop -------------------------------------------------------
  const onDragStart = (e, id) => {
    setDraggedId(id);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", id);
  };

  const onDragEnd = () => {
    setDraggedId(null);
    setDragOverCol(null);
  };

  const onColumnDragOver = (e, colKey) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverCol !== colKey) setDragOverCol(colKey);
  };

  const onColumnDrop = (e, colKey) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain") || draggedId;
    if (id) moveTask(id, colKey);
    setDraggedId(null);
    setDragOverCol(null);
  };

  // ---- ویرایش محتوای کارت -------------------------------------------
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditDraft({ title: task.title, note: task.note || "" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditDraft({ title: "", note: "" });
  };

  const saveEdit = (id) => {
    const title = editDraft.title.trim();
    if (!title) {
      cancelEdit();
      return;
    }
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, title, note: editDraft.note.trim() } : t)));
    setEditingId(null);
    setEditDraft({ title: "", note: "" });
  };

  const onEditKeyDown = (e, id) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  return (
    <div dir="rtl" className="min-h-screen w-full" style={{ background: "#1B2130", fontFamily: "'Vazirmatn', Tahoma, Arial, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700;800&display=swap');
        .paper-card { background: #FFFDF7; }
        .cork-bg {
          background-color: #1B2130;
          background-image: radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 18px 18px;
        }
        .scrollbar-thin::-webkit-scrollbar { width: 6px; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 8px; }
        .dark-input::placeholder { color: rgba(255,255,255,0.4); }
        .dark-input:focus { border-color: rgba(255,255,255,0.4) !important; }
      `}</style>

      <div className="cork-bg min-h-screen w-full px-4 py-8 md:px-10">
        {/* هدر */}
        <div className="mx-auto mb-8 flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">تخته وظایف</h1>
            <p className="mt-1 text-sm text-white/50">کارت‌ها را بین ستون‌ها بکش و رها کن، بعد کارِت رو ذخیره کن.</p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className="min-w-[9rem] text-xs transition-opacity duration-300"
              style={{
                color:
                  status.state === "error" ? "#F0A0A0" : status.state === "saved" ? "#9BD69B" : "rgba(255,255,255,0.55)",
                opacity: status.message ? 1 : 0,
              }}
            >
              {status.message}
            </span>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-xs font-medium text-white/70 transition hover:bg-white/10"
              title="بازگشت به حالت پیش‌فرض"
            >
              <RotateCcw size={14} />
              بازنشانی
            </button>
            <button
              onClick={handleSave}
              disabled={status.state === "saving"}
              className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold text-[#1B2130] shadow-sm transition hover:brightness-95 disabled:opacity-60"
              style={{ background: "#E8C87A" }}
            >
              {status.state === "saving" ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
              ذخیره محلی
            </button>
          </div>
        </div>

        {/* فرم افزودن تسک */}
        <form
          onSubmit={addTask}
          className="mx-auto mb-8 flex max-w-6xl flex-col gap-2 rounded-2xl p-3 sm:flex-row"
          style={{ border: "1px solid rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}
        >
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="عنوان تسک جدید را بنویس…"
            className="dark-input flex-1 rounded-xl px-4 py-2.5 text-sm outline-none"
            style={{
              backgroundColor: "#242B3D",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          />
          <select
            value={newColumn}
            onChange={(e) => setNewColumn(e.target.value)}
            className="dark-input rounded-xl px-3 py-2.5 text-sm font-medium outline-none"
            style={{
              backgroundColor: "#242B3D",
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,0.18)",
            }}
          >
            {COLUMNS.map((c) => (
              <option key={c.key} value={c.key} style={{ backgroundColor: "#242B3D", color: "#FFFFFF" }}>
                {c.title}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-bold text-[#1B2130] transition hover:brightness-95"
            style={{ background: "#E8C87A" }}
          >
            <Plus size={16} />
            افزودن
          </button>
        </form>

        {/* ستون‌ها */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3">
          {COLUMNS.map((col) => {
            const colTasks = tasks.filter((t) => t.column === col.key);
            const isOver = dragOverCol === col.key;
            return (
              <div
                key={col.key}
                onDragOver={(e) => onColumnDragOver(e, col.key)}
                onDragLeave={() => setDragOverCol((c) => (c === col.key ? null : c))}
                onDrop={(e) => onColumnDrop(e, col.key)}
                className="flex min-h-[420px] flex-col rounded-2xl border p-3 transition-colors"
                style={{
                  borderColor: isOver ? col.accent : "rgba(255,255,255,0.08)",
                  background: isOver ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
                }}
              >
                {/* برچسب پوشه‌ای ستون */}
                <div className="mb-3 flex items-center justify-between px-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: col.dot }} />
                    <h2 className="text-sm font-bold text-white/85">{col.title}</h2>
                  </div>
                  <span
                    className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                    style={{ background: col.soft, color: col.accent }}
                  >
                    {colTasks.length}
                  </span>
                </div>

                <div className="scrollbar-thin flex flex-1 flex-col gap-3 overflow-y-auto px-1 pb-2 pt-3">
                  {colTasks.length === 0 && (
                    <div
                      className="flex flex-1 items-center justify-center rounded-xl border border-dashed p-6 text-center text-xs text-white/30"
                      style={{ borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      کارتی اینجا نیست — یکی را بکش و رها کن
                    </div>
                  )}

                  {colTasks.map((task) => {
                    const isEditing = editingId === task.id;
                    return (
                      <div
                        key={task.id}
                        draggable={!isEditing}
                        onDragStart={(e) => onDragStart(e, task.id)}
                        onDragEnd={onDragEnd}
                        className={`paper-card group relative z-0 rounded-lg p-3 pr-4 shadow-md transition hover:z-10 hover:shadow-lg ${
                          isEditing ? "cursor-default ring-2" : "cursor-grab active:cursor-grabbing"
                        }`}
                        style={{
                          opacity: draggedId === task.id ? 0.35 : 1,
                          borderRight: `4px solid ${col.accent}`,
                          ...(isEditing ? { boxShadow: `0 0 0 2px ${col.accent}55` } : {}),
                        }}
                      >
                        <span
                          className="absolute -top-2 right-3 flex h-4 w-4 items-center justify-center rounded-full shadow"
                          style={{ background: col.accent }}
                        >
                          <Pin size={9} color="#fff" />
                        </span>

                        {isEditing ? (
                          <div className="flex flex-col gap-2">
                            <input
                              autoFocus
                              value={editDraft.title}
                              onChange={(e) => setEditDraft((d) => ({ ...d, title: e.target.value }))}
                              onKeyDown={(e) => onEditKeyDown(e, task.id)}
                              placeholder="عنوان تسک"
                              className="w-full rounded-md border border-black/10 bg-white px-2 py-1.5 text-[13px] font-semibold text-[#2B2B2B] outline-none"
                              style={{ borderColor: "rgba(0,0,0,0.15)" }}
                            />
                            <textarea
                              value={editDraft.note}
                              onChange={(e) => setEditDraft((d) => ({ ...d, note: e.target.value }))}
                              onKeyDown={(e) => onEditKeyDown(e, task.id)}
                              placeholder="توضیح (اختیاری)"
                              rows={2}
                              className="w-full resize-none rounded-md border border-black/10 bg-white px-2 py-1.5 text-[11px] leading-5 text-[#2B2B2B]/70 outline-none"
                            />
                            <div className="flex items-center justify-end gap-1.5">
                              <button
                                onClick={cancelEdit}
                                className="rounded-md p-1 text-[#2B2B2B]/40 transition hover:bg-black/5 hover:text-[#c0392b]"
                                title="انصراف"
                              >
                                <X size={14} />
                              </button>
                              <button
                                onClick={() => saveEdit(task.id)}
                                className="flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-bold text-white transition hover:brightness-95"
                                style={{ background: col.accent }}
                                title="ذخیرهٔ ویرایش"
                              >
                                <Check size={12} />
                                تأیید
                              </button>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="flex items-start justify-between gap-2">
                              <p className="text-[13px] font-semibold leading-6 text-[#2B2B2B]">{task.title}</p>
                              <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition group-hover:opacity-100">
                                <button
                                  onClick={() => startEdit(task)}
                                  className="mt-0.5 rounded-md p-0.5 text-[#2B2B2B]/35 transition hover:bg-black/5 hover:text-[#2B2B2B]"
                                  title="ویرایش تسک"
                                >
                                  <Pencil size={13} />
                                </button>
                                <button
                                  onClick={() => removeTask(task.id)}
                                  className="mt-0.5 rounded-md p-0.5 text-[#2B2B2B]/35 transition hover:bg-black/5 hover:text-[#c0392b]"
                                  title="حذف تسک"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            </div>
                            {task.note && <p className="mt-1 text-[11px] leading-5 text-[#2B2B2B]/55">{task.note}</p>}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-6xl text-center text-[11px] text-white/25">
          داده‌ها در حافظهٔ اختصاصی این ابزار ذخیره می‌شوند و فقط برای شما در این ابزار قابل مشاهده‌اند.
        </p>
      </div>
    </div>
  );
}
