namespace ProjectHub.Domain.Common;

public abstract class BaseEntity : IAuditable
{
    public long Id { get; protected set; }

    public DateTime CreatedAt { get; protected set; }

    public DateTime? UpdatedAt { get; protected set; }

    public long? CreatedBy { get; protected set; }

    public long? UpdatedBy { get; protected set; }
}