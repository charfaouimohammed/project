using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace API_GestionConges.Models
{
    public partial class Congees
    {
        public int IdConger { get; set; }
        public DateTime? DateDebut { get; set; }
        public DateTime? DateFin { get; set; }
        public string Statut { get; set; }
        public string Justification { get; set; }
        public int? IdEmploye { get; set; }
        public int? IdAdmine { get; set; }
        public Admines IdAdmineNavigation { get; set; }
        public Emploiyes IdEmployeNavigation { get; set; }

        [NotMapped]
        public string EmployeName { get; set; }

        [NotMapped]
        public string EmployeTel { get; set; }

    }
}
