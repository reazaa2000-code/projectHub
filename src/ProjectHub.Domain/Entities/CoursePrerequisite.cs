using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ProjectHub.Domain.Common;

namespace ProjectHub.Domain.Entities;

/// <summary>
/// Represents a prerequisite relationship between two courses.
/// BR-008: Zero or more prerequisites.
/// BR-009: Advisory only (not enforced).
/// </summary>
public class CoursePrerequisite : BaseEntity
{
    public long CourseId { get; set; }
    public long PrerequisiteCourseId { get; set; }

    // Navigation Properties
    public Course Course { get; set; } = null!;
    public Course PrerequisiteCourse { get; set; } = null!;

    /// <summary>
    /// BR-008: A Course cannot be its own prerequisite.
    /// </summary>
    public void Validate()
    {
        if (CourseId == PrerequisiteCourseId)
            throw new InvalidOperationException(
                "A course cannot be its own prerequisite.");
    }
}