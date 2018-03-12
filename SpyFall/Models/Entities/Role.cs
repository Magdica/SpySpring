using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpyFall.Models.CodeFirstClasses
{
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int LocationId { get; set; }
        public Location Location { get; set; }
    }
}