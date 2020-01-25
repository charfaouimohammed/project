using System;
using System.Collections.Generic;

namespace API_GestionConges.Models
{
    public partial class Emploiyes
    {
        public Emploiyes()
        {
            Congees = new HashSet<Congees>();
        }

        public int IdEmploiye { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public string Poste { get; set; }
        public string Username { get; set; }
        public string Passworld { get; set; }
        public string Tel { get; set; }

        public ICollection<Congees> Congees { get; set; }
    }
}
