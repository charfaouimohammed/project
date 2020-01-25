using System;
using System.Collections.Generic;

namespace API_GestionConges.Models
{
    public partial class Congees
    {
        public int IdConger { get; set; }
        public DateTime? DateDebut { get; set; }
        public DateTime? DateFin { get; set; }
        public string Statut { get; set; }
        public string Justification { get; set; }
        public int? IdEploye { get; set; }
        public int? IdAdmine { get; set; }

        public Admines IdAdmineNavigation { get; set; }
        public Emploiyes IdEployeNavigation { get; set; }
    }
}
