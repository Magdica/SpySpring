namespace SpyFall.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ContextUpdate1 : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.Rounds", "LocationId");
            CreateIndex("dbo.PlayerInRounds", "RoundId");
            CreateIndex("dbo.PlayerInRounds", "PlayerId");
            CreateIndex("dbo.PlayerInRounds", "RoleId");
            AddForeignKey("dbo.Rounds", "LocationId", "dbo.Locations", "Id", cascadeDelete: true);
            AddForeignKey("dbo.PlayerInRounds", "PlayerId", "dbo.Players", "Id", cascadeDelete: true);
            AddForeignKey("dbo.PlayerInRounds", "RoleId", "dbo.Roles", "Id", cascadeDelete: true);
            AddForeignKey("dbo.PlayerInRounds", "RoundId", "dbo.Rounds", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PlayerInRounds", "RoundId", "dbo.Rounds");
            DropForeignKey("dbo.PlayerInRounds", "RoleId", "dbo.Roles");
            DropForeignKey("dbo.PlayerInRounds", "PlayerId", "dbo.Players");
            DropForeignKey("dbo.Rounds", "LocationId", "dbo.Locations");
            DropIndex("dbo.PlayerInRounds", new[] { "RoleId" });
            DropIndex("dbo.PlayerInRounds", new[] { "PlayerId" });
            DropIndex("dbo.PlayerInRounds", new[] { "RoundId" });
            DropIndex("dbo.Rounds", new[] { "LocationId" });
        }
    }
}
