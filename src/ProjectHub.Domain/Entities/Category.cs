
using ProjectHub.Domain.Common;

namespace ProjectHub.Domain.Entities;

/// <summary>
/// Groups educational courses.
/// Single-level hierarchy for MVP.
/// </summary>
public class Category : BaseEntity
{
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public bool IsActive { get; set; } = true;

    // Navigation Properties
    public ICollection<Course> Courses { get; set; } = new List<Course>();

    public void Validate()
    {
        if (string.IsNullOrWhiteSpace(Name))
            throw new ArgumentException(
                "Category name cannot be empty.",
                nameof(Name));
    }
}