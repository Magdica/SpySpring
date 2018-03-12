using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SpyFall.Models.CodeFirstClasses
{
    public class Game
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public List<Player> Players { get; set; }
        public List<Round> Rounds { get; set; }
    }
}