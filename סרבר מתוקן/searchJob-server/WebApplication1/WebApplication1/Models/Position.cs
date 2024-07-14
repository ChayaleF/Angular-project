using System;

namespace WebApplication1.Models
{
    public class Position
    {
        public string JobName { get; set; }
        public int JobScope { get; set; }
        public string Area { get; set; }
        public Fields JobField { get; set; }
        public string Requirements { get; set; }
        public bool Hibridi { get; set; }


    }

    public enum Fields { Java,Angular,React,Node}
}
