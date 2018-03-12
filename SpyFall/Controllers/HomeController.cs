using SpyFall.Models.CodeFirstClasses;
using SpyFall.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SpyFall.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }

        public List<Player> GetPlayers(int gameId)
        {
            using (SpyFallDbContext db = new SpyFallDbContext())
            {
                List<Player> players = db.Players.Where(p => p.GameId == gameId).ToList();
                return players;
            }
        }
    }
}