using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpyFall.Models.CodeFirstClasses
{
    public class PlayerInRound
    {
        public int Id { get; set; }

        public int RoundId { get; set; }
        public Round Round { get; set; }

        public int PlayerId { get; set; }
        public Player Player { get; set; }

        public int RoleId { get; set; }
        public Role Role { get; set; }

        public int? Score { get; set; }
    }
}