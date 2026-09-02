using ProjectHub.Domain.Common;
using ProjectHub.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ProjectHub.Domain.Entities;

/// <summary>
/// Represents the educational definition (template) of a training program.
/// Does NOT store operational data (schedule, tuition, instructor, capacity).
/// ADR-001: Course ≠ Class.
/// </summary>
public class Course : BaseEntity
{
    public string CourseCode { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int DurationHours { get; set; }
    public int DefaultSessionCount { get; set; }  // Added: Required by UC-001 & UC-004
    public CourseLevel Level { get; set; }
    public bool IsActive { get; set; } = true;

    // Foreign Keys
    public long CategoryId { get; set; }

    // Navigation Properties
    public Category Category { get; set; } = null!;
    public ICollection<CoursePrerequisite> Prerequisites { get; set; } = new List<CoursePrerequisite>();
    public ICollection<Class> Classes { get; set; } = new List<Class>();

    // ──────────────────────────────────────
    // Domain Invariants (BR-008, BR-010)
    // ──────────────────────────────────────

    /// <summary>
    /// CourseCode becomes immutable after the first Class is created. (UC-002)
    /// </summary>
    public bool CanEditCode => Classes.Count == 0;

    public void ChangeCode(string newCode)
    {
        if (!CanEditCode)
            throw new InvalidOperationException(
                "Course code cannot be changed after the first class has been created.");

        if (string.IsNullOrWhiteSpace(newCode))
            throw new ArgumentException("Course code cannot be empty.", nameof(newCode));

        CourseCode = newCode.Trim();
    }

    public void Deactivate()
    {
        IsActive = false;
    }
}