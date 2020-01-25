using System;
using System.Collections.Generic;

namespace API_GestionConges.Models
{
    public partial class Admines
    {
        public Admines()
        {
            Congees = new HashSet<Congees>();
        }

        public int IdAdmine { get; set; }
        public string Nom { get; set; }
        public string Premon { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Passworld { get; set; }

        public ICollection<Congees> Congees { get; set; }
    }
}
