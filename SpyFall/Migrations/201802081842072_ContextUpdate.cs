namespace SpyFall.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ContextUpdate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Games",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Code = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Players",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        GameId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Games", t => t.GameId, cascadeDelete: true)
                .Index(t => t.GameId);
            
            CreateTable(
                "dbo.Rounds",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LocationId = c.Int(nullable: false),
                        GameId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Games", t => t.GameId, cascadeDelete: true)
                .Index(t => t.GameId);
            
            CreateTable(
                "dbo.Locations",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        LocationId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Locations", t => t.LocationId, cascadeDelete: true)
                .Index(t => t.LocationId);
            
            CreateTable(
                "dbo.PlayerInRounds",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoundId = c.Int(nullable: false),
                        PlayerId = c.Int(nullable: false),
                        RoleId = c.Int(nullable: false),
                        Score = c.Int(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Roles", "LocationId", "dbo.Locations");
            DropForeignKey("dbo.Rounds", "GameId", "dbo.Games");
            DropForeignKey("dbo.Players", "GameId", "dbo.Games");
            DropIndex("dbo.Roles", new[] { "LocationId" });
            DropIndex("dbo.Rounds", new[] { "GameId" });
            DropIndex("dbo.Players", new[] { "GameId" });
            DropTable("dbo.PlayerInRounds");
            DropTable("dbo.Roles");
            DropTable("dbo.Locations");
            DropTable("dbo.Rounds");
            DropTable("dbo.Players");
            DropTable("dbo.Games");
        }
    }
}
