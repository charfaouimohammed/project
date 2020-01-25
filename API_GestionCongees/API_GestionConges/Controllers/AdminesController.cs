using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_GestionConges.Models;
using Microsoft.AspNetCore.Cors;

namespace API_GestionConges.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]

    public class AdminesController : ControllerBase
    {
        private readonly GestionCongeesContext _context;

        public AdminesController(GestionCongeesContext context)
        {
            _context = context;
        }

        // GET: api/Admines
        [HttpGet]
        public IEnumerable<Admines> GetAdmines()
        {
            return _context.Admines;
        }

        // GET: api/Admines/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAdmines([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var admines = await _context.Admines.FindAsync(id);

            if (admines == null)
            {
                return NotFound();
            }

            return Ok(admines);
        }

        // PUT: api/Admines/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAdmines([FromRoute] int id, [FromBody] Admines admines)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != admines.IdAdmine)
            {
                return BadRequest();
            }

            _context.Entry(admines).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminesExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Admines
        [HttpPost]
        public async Task<IActionResult> PostAdmines([FromBody] Admines admines)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Admines.Add(admines);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AdminesExists(admines.IdAdmine))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAdmines", new { id = admines.IdAdmine }, admines);
        }

        // DELETE: api/Admines/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAdmines([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var admines = await _context.Admines.FindAsync(id);
            if (admines == null)
            {
                return NotFound();
            }

            _context.Admines.Remove(admines);
            await _context.SaveChangesAsync();

            return Ok(admines);
        }

        private bool AdminesExists(int id)
        {
            return _context.Admines.Any(e => e.IdAdmine == id);
        }
    }
}