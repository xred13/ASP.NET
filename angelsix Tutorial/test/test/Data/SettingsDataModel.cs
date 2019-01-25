using System.ComponentModel.DataAnnotations;

namespace test
{
    public class SettingsDataModel
    {
        /// <summary>
        /// The columns of each row of data 
        /// </summary>

        [Key]
        public string Id { get; set; }

        [Required]
        [MaxLength(256)]
        public string Name { get; set; }

        [Required]
        [MaxLength(2048)]
        public string Value { get; set; }
    }
}
