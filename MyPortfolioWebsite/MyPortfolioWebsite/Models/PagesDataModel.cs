using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MyPortfolioWebsite.Models
{
    public class PagesDataModel
    {

        [Key]
        public string Id { get; set; }

        [Required]
        public Pages Page { get; set; }

        [Required]
        public string Text { get; set; }


        public enum Pages
        {
            About,
            Contacts,
            Extra
        }
    }
}
