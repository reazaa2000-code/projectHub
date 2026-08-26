namespace ProjectHub.Domain.Common;

public interface IAuditable
{
    DateTime CreatedAt { get; }

    DateTime? UpdatedAt { get; }

    long? CreatedBy { get; }

    long? UpdatedBy { get; }
}