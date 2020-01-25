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
    public class CongeesController : ControllerBase
    {
        private readonly GestionCongeesContext _context;

        public CongeesController(GestionCongeesContext context)
        {
            _context = context;
        }

        // GET: api/Congees
        [HttpGet]
        public IEnumerable<Congees> GetCongees()
        {
            return _context.Congees;
        }

        // GET: api/Congees/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCongees([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var congees = await _context.Congees.FindAsync(id);

            if (congees == null)
            {
                return NotFound();
            }

            return Ok(congees);
        }

        // PUT: api/Congees/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCongees([FromRoute] int id, [FromBody] Congees congees)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != congees.IdConger)
            {
                return BadRequest();
            }

            _context.Entry(congees).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CongeesExists(id))
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

        // POST: api/Congees
        [HttpPost]
        public async Task<IActionResult> PostCongees([FromBody] Congees congees)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Congees.Add(congees);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CongeesExists(congees.IdConger))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCongees", new { id = congees.IdConger }, congees);
        }
        // GET: api/Congees/ByIdEploye/
        [HttpGet("ByIdEploye/{IdEploye}")]
        public IActionResult GetCongessByIdEmp([FromRoute] int IdEploye)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var emp = _context.Congees.Where(c => c.IdEploye == IdEploye);

            if (emp == null)
            {
                return NotFound();
            }

            return Ok(emp);
        }
        //end test

        // DELETE: api/Congees/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCongees([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var congees = await _context.Congees.FindAsync(id);
            if (congees == null)
            {
                return NotFound();
            }

            _context.Congees.Remove(congees);
            await _context.SaveChangesAsync();

            return Ok(congees);
        }

        private bool CongeesExists(int id)
        {
            return _context.Congees.Any(e => e.IdConger == id);
        }
    }
}