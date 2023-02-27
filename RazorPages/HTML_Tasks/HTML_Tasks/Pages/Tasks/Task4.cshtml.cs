using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace HTML_Tasks.Pages.Tasks
{
    public class Task4Model : PageModel
    {
        public readonly string[] _sexes;
        public readonly string[] _countries;
        public readonly Random random;

        public Task4Model()
        {
            _sexes = new string[] { "male", "female" };
            _countries = new string[] { "Ukraine", "Poland", "UK", "US", "Germany", "France" };
            random = new Random();
        }
        public void OnGet()
        {
        }

        public string getRandomSex() => _sexes[random.Next(0, _sexes.Length)];
        public string getRandomCountry() => _countries[random.Next(0, _countries.Length)];
    }
}
