using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpyFall.Models.CodeFirstClasses
{
    public class Round
    {
        public int Id { get; set; }

        public int LocationId { get; set; }
        public Location Location { get; set; }

        public int GameId { get; set; }
        public Game Game { get; set; }
    }
}