using FormHandling.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FormHandling.ViewModels
{
    public class AccountViewModel
    {
        public Account Account { get; set; }
        public List<Language> Languages { get; set; }
        public SelectList Roles { get; set; }
    }
}
