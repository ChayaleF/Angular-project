using WebApplication1.Models;

namespace API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public Fields SearchField { get; set; }

    }
}