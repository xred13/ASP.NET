using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
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

        [NotMapped]
        public List<string> ImageList { get; set; }

        public string ImageListString {
            get { return string.Join(",", ImageList); }
            set { ImageList = value.Split(",").ToList(); }
        }


        public enum ProjectTypes
        {
            WebDevelopment,
            GameDevelopment
        }

    }
}
