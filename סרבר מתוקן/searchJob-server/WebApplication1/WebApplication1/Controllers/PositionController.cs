using API.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {
        public static List<Position> allPositions = new List<Position>()
        {
            new Position { JobName="Developer in Java",JobField=Fields.Java,JobScope=45,Area="Modi'in",Hibridi=true,Requirements="Nothing" },
            new Position { JobName="Developer in Angular",JobField=Fields.Angular,JobScope=40,Area="Modi'in",Hibridi=false,Requirements="Nothing" },
            new Position { JobName="Expert developer in Angular",JobField=Fields.Angular,JobScope=30,Area="Tel Aviv",Hibridi=true,Requirements="Nothing" },
            new Position { JobName="Developer in Node",JobField=Fields.Java,JobScope=45,Area="Dan",Hibridi=true,Requirements="Nothing" },

        };

        [HttpGet("GetAllPositions")]
        public ActionResult GetAllCostumes()
        {
            
            return Ok(allPositions);
        }
    }
}
