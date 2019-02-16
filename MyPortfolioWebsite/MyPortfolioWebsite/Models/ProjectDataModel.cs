using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortfolioWebsite.Models
{
    public class ProjectDataModel
    {
        [Key]
        public string Id { get; set; }

        [Required]
        [MaxLength(32)]
        public ProjectTypes ProjectType { get; set; }

        [Required]
        [MaxLength(32)]
        public string Title { get; set; }

        [Required]
        [MaxLength(2048)]
        public string Description { get; set; }

        [Required]
        public byte[] Image { get; set; }


        public enum ProjectTypes
        {
            WebDevelopment,
            GameDevelopment
        }

    }
}
