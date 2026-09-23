using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectHub.Domain.Enums
{
    public enum ClassStatus : byte
    {
        Draft = 1,
        Open = 2,
        Full = 3,
        InProgress = 4,
        Completed = 5,
        Cancelled = 6
    }
}
