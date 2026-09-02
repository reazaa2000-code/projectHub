using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectHub.Domain.Enums
{
    /// <summary>
    /// Single Source of Truth — based on Enrollment-Definition.md and UC-006.
    /// </summary>
    public enum EnrollmentStatus : byte
    {
        Registered = 1,
        Studying = 2,
        Completed = 3,
        Cancelled = 4,
        Dropped = 5,
        Failed  = 6
    }
}
