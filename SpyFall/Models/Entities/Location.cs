using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpyFall.Models.CodeFirstClasses
{
    public class Location
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Role> Roles { get; set; }
    }
}