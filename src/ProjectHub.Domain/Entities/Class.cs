using ProjectHub.Domain.Common;
using ProjectHub.Domain.Enums;

namespace ProjectHub.Domain.Entities;

/// <summary>
/// Represents one operational offering of a Course
/// during a specific Academic Term.
/// </summary>
public class Class : BaseEntity
{
    // Foreign Keys

    public long CourseId { get; set; }

    public long AcademicTermId { get; set; }


    // Operational Information

    public string Code { get; set; } = string.Empty;

    public int Capacity { get; set; }

    public decimal Tuition { get; set; }

    public DeliveryType DeliveryType { get; set; }

    public ClassStatus Status { get; private set; } = ClassStatus.Draft;

    public DateOnly StartDate { get; set; }

    public DateOnly EndDate { get; set; }


    // Navigation Properties

    public Course Course { get; set; } = null!;

    public AcademicTerm AcademicTerm { get; set; } = null!;


    // Domain Behavior

    public void Open()
    {
        if (Status != ClassStatus.Draft)
            throw new InvalidOperationException(
                "Only a draft class can be opened.");

        Status = ClassStatus.Open;
    }

    public void MarkFull()
    {
        if (Status != ClassStatus.Open)
            throw new InvalidOperationException(
                "Only an open class can be marked as full.");

        Status = ClassStatus.Full;
    }

    public void MarkInProgress()
    {
        if (Status != ClassStatus.Open &&
            Status != ClassStatus.Full)
            throw new InvalidOperationException(
                "Only an open or full class can become in progress.");

        Status = ClassStatus.InProgress;
    }

    public void Complete()
    {
        if (Status != ClassStatus.InProgress)
            throw new InvalidOperationException(
                "Only an in-progress class can be completed.");

        Status = ClassStatus.Completed;
    }

    public void Cancel()
    {
        if (Status == ClassStatus.Completed)
            throw new InvalidOperationException(
                "A completed class cannot be cancelled.");

        Status = ClassStatus.Cancelled;
    }
}