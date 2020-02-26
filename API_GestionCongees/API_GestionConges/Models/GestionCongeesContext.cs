using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace API_GestionConges.Models
{
    public partial class GestionCongeesContext : DbContext
    {
        public GestionCongeesContext()
        {
        }

        public GestionCongeesContext(DbContextOptions<GestionCongeesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admines> Admines { get; set; }
        public virtual DbSet<Congees> Congees { get; set; }
        public virtual DbSet<Emploiyes> Emploiyes { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("server=DESKTOP-FOEL211\\MOHAMED; database=GestionCongees; integrated security=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admines>(entity =>
            {
                entity.HasKey(e => e.IdAdmine);

                entity.Property(e => e.IdAdmine)
                    .HasColumnName("ID_Admine")
                    .ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Nom)
                    .HasColumnName("nom")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Passworld)
                    .HasColumnName("passworld")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Premon)
                    .HasColumnName("premon")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Congees>(entity =>
            {
                entity.HasKey(e => e.IdConger);

                entity.ToTable("congees");

                entity.Property(e => e.IdConger)
                    .HasColumnName("ID_Conger")
                    .ValueGeneratedNever();

                entity.Property(e => e.DateDebut)
                    .HasColumnName("DateDEbut")
                    .HasColumnType("date");

                entity.Property(e => e.DateFin).HasColumnType("date");

                entity.Property(e => e.IdAdmine).HasColumnName("ID_Admine");

                entity.Property(e => e.IdEmploye).HasColumnName("ID_Eploye");

                entity.Property(e => e.Justification)
                    .HasColumnName("justification")
                    .HasMaxLength(360)
                    .IsUnicode(false);

                entity.Property(e => e.Statut)
                    .HasColumnName("statut")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdAdmineNavigation)
                    .WithMany(p => p.Congees)
                    .HasForeignKey(d => d.IdAdmine)
                    .HasConstraintName("FK__congees__ID_Admi__1FCDBCEB");

                entity.HasOne(d => d.IdEmployeNavigation)
                    .WithMany(p => p.Congees)
                    .HasForeignKey(d => d.IdEmploye)
                    .HasConstraintName("FK__congees__ID_Eplo__1ED998B2");
            });

            modelBuilder.Entity<Emploiyes>(entity =>
            {
                entity.HasKey(e => e.IdEmploiye);

                entity.Property(e => e.IdEmploiye)
                    .HasColumnName("ID_Emploiye")
                    .ValueGeneratedNever();

                entity.Property(e => e.Nom)
                    .HasColumnName("nom")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Passworld)
                    .HasColumnName("passworld")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Poste)
                    .HasColumnName("poste")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Prenom)
                    .HasColumnName("prenom")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Tel)
                    .HasColumnName("tel")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });
        }
    }
}
