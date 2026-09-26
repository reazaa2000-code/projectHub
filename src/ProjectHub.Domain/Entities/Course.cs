
using ProjectHub.Domain.Common;
using ProjectHub.Domain.Enums;

namespace ProjectHub.Domain.Entities;

/// <summary>
/// Represents the educational definition (template) of a training program.
/// Does NOT store operational data (schedule, tuition, instructor, capacity).
/// ADR-001: Course != Class.
/// </summary>
public class Course : BaseEntity
{
    public string CourseCode { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public int DurationHours { get; set; }
    public int DefaultSessionCount { get; set; }
    public CourseLevel Level { get; set; }
    public bool IsActive { get; set; } = true;

    // Foreign Keys
    public long CategoryId { get; set; }

    // Navigation Properties
    public Category Category { get; set; } = null!;
    public ICollection<CoursePrerequisite> Prerequisites { get; set; } = new List<CoursePrerequisite>();
    public ICollection<Class> Classes { get; set; } = new List<Class>();

    /// <summary>
    /// CourseCode becomes immutable after the first Class is created.
    /// </summary>
    public bool CanEditCode => Classes.Count == 0;

    public void ChangeCode(string newCode)
    {
        if (!CanEditCode)
            throw new InvalidOperationException(
                "Course code cannot be changed after the first class has been created.");

        if (string.IsNullOrWhiteSpace(newCode))
            throw new ArgumentException(
                "Course code cannot be empty.", nameof(newCode));

        CourseCode = newCode.Trim();
    }

    public void Deactivate()
    {
        IsActive = false;
    }

    public void Validate()
    {
        if (string.IsNullOrWhiteSpace(CourseCode))
            throw new ArgumentException("Course code cannot be empty.", nameof(CourseCode));

        if (string.IsNullOrWhiteSpace(Title))
            throw new ArgumentException("Course title cannot be empty.", nameof(Title));

        if (DurationHours <= 0)
            throw new ArgumentOutOfRangeException(nameof(DurationHours),
                "Duration must be greater than zero.");

        if (DefaultSessionCount <= 0)
            throw new ArgumentOutOfRangeException(nameof(DefaultSessionCount),
                "Default session count must be greater than zero.");
    }
}