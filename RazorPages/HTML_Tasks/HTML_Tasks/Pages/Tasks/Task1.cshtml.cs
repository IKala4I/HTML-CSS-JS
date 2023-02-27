using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations.Schema;
using System.Drawing;
using System.IO;

namespace HTML_Tasks.Pages
{
    public class Task1Model : PageModel
    {
        private readonly IWebHostEnvironment _environment;
        public Task1Model(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [BindProperty]
        public FileViewModel FileUpload { get; set; }
        public void OnGet()
        {
        }

        public async Task OnPostAsync(Person person)
        {
            using (StreamWriter writer = new StreamWriter("D:\\Study\\KPI\\Programming\\RazorPages\\HTML_Tasks\\Teachers.txt", true))
            {
                writer.Write(person.ToString());
            }

            if (FileUpload.FormFile.Length> 0)
            {
                using(var stream = new FileStream(Path.Combine(_environment.WebRootPath, "uploadfiles", FileUpload.FormFile.FileName), FileMode.Create))
                {
                    await FileUpload.FormFile.CopyToAsync(stream);
                }
            }
        }
    }

    public class Person
    {
        public string FullName { get; set; }
        public string Sexes { get; set; }
        public DateTime Birthday { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public Color Favcolor { get; set; }
        public string Countries { get; set; }
        public string City { get; set; }
        public string Comment { get; set; }

        public override string ToString()
        {
            return "FullName: " + FullName + "\n"
                + "Sex: " + Sexes + "\n"
                + "Date of birthday: " + Birthday.ToString("yyyy-MM-dd") + "\n"
                + "Email: " + Email + "\n"
                + "Phone Number: " + Phone + "\n"
                + "Color for background in RGB: " + $"R - {Favcolor.R}, G - {Favcolor.G}, B - {Favcolor.B}" + "\n"
                + "Country: " + Countries + "\n"
                + "City: " + City + "\n"
                + "Comment: " + Comment + "\n"
                + "Date of adding: " + DateTime.Now.ToString() + "\n"
                + "--------------------------------\n";
        }
    }



    public class FileViewModel
    {
        public IFormFile FormFile { get; set; }
    }
}
