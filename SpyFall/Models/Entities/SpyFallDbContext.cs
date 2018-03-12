using SpyFall.Models.CodeFirstClasses;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SpyFall.Models.Entities
{
    public class SpyFallDbContext : DbContext
    {
        public DbSet<Location> Locations { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Player> Players { get; set; }
        public DbSet<Round> Rounds { get; set; }
        public DbSet<PlayerInRound> PlayersInRounds { get; set; }
        public DbSet<Role> Roles { get; set; }
    }
}