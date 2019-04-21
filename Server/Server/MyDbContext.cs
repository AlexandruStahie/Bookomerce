using Microsoft.EntityFrameworkCore;
using Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server
{
    public class MyDbContext : DbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            //configures one-to-one relationship
            //modelBuilder.Entity<User>()
            //    .HasOne(s => s.UserDetails)
            //    .WithOne(ad => ad.User)
            //    .HasForeignKey<UserDetails>(ad => ad.UserId);

        }
    }
}
