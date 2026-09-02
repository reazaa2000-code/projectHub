using ProjectHub.Domain.Common;
using System.Security.Claims;

namespace ProjectHub.Domain.Entities;

/// <summary>
/// Represents an educational period (e.g., Spring 2026, Summer 2026).
/// Each Class belongs to exactly one Academic Term.
/// </summary>
public class AcademicTerm : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public DateOnly StartDate { get; set; }
    public DateOnly EndDate { get; set; }
    public bool IsActive { get; set; } = true;

    // Navigation Properties
    public ICollection<Class> Classes { get; set; } = new List<Class>();

    // ──────────────────────────────────────
    // Domain Invariants
    // ──────────────────────────────────────

    public void Validate()
    {
        if (string.IsNullOrWhiteSpace(Name))
            throw new ArgumentException("Academic Term name cannot be empty.", nameof(Name));

        if (EndDate < StartDate)
            throw new InvalidOperationException("End date cannot be earlier than start date.");
    }
}