using backend_api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace backend_api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}
