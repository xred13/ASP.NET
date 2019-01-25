using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace ASPNETCoreMicrosoftTutorial.Models
{
    public class ASPNETCoreMicrosoftTutorialContext : DbContext
    {
        public ASPNETCoreMicrosoftTutorialContext (DbContextOptions<ASPNETCoreMicrosoftTutorialContext> options)
            : base(options)
        {
        }

        public DbSet<ASPNETCoreMicrosoftTutorial.Models.Movie> Movie { get; set; }
    }
}
