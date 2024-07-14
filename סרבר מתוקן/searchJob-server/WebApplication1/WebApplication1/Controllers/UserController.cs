using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Collections.Generic;
using WebApplication1.Models;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> allUsers = new List<User>() 
        { 
            new User { Id = 1, Name = "Avi", Password = "123", SearchField = Fields.Angular },
            new User { Id = 1, Name = "Yosi", Password = "234", SearchField = Fields.Java },
            new User { Id = 1, Name = "Tal", Password = "345", SearchField = Fields.Node },
            new User { Id = 1, Name = "Gad", Password = "456", SearchField = Fields.Angular },

        };
  

        // GET api/<PersonController>/5
        [HttpGet("{name}/{password}")]
        public ActionResult<User> Get(string name,string password)
        {
            User user = allUsers.FirstOrDefault(x => x.Name == name&&x.Password==password);
            if (user != null)
                return Ok(user);
            return NotFound();

        }

        
    }
}
