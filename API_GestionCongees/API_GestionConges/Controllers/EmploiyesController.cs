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
    public class EmploiyesController : ControllerBase
    {
        private readonly GestionCongeesContext _context;

        public EmploiyesController(GestionCongeesContext context)
        {
            _context = context;
        }

        // GET: api/Emploiyes
        [HttpGet]
        public IEnumerable<Emploiyes> GetEmploiyes()
        {
            return _context.Emploiyes;
        }

        // GET: api/Emploiyes/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmploiyes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var emploiyes = await _context.Emploiyes.FindAsync(id);

            if (emploiyes == null)
            {
                return NotFound();
            }

            return Ok(emploiyes);
        }

        //test
        // GET: api/Emploiyes/ByUserName/
        [HttpGet("ByUserName/{UserName}")]
        public IActionResult GetEmployersByUsername([FromRoute] string username)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var emp = _context.Emploiyes.Where(c => c.Username == username);

            if (emp == null)
            {
                return NotFound();
            }

            return Ok(emp);
        }
        //end test

        [HttpPost]
        [Route("login")]
        public async Task<object>Login(Emploiyes emploiyes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            dynamic obj = null;
            if (emploiyes.IsAdmin)
            {
                obj = _context.Admines.SingleOrDefault(c => c.Username == emploiyes.Username && c.Passworld == emploiyes.Passworld);
              
            }
            else
            {
                obj = _context.Emploiyes.SingleOrDefault(c => c.Username == emploiyes.Username && c.Passworld == emploiyes.Passworld);
            }
            if(obj==null)
                return BadRequest("Not autorized");

            return Ok(obj);
        }

        // PUT: api/Emploiyes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmploiyes([FromRoute] int id, [FromBody] Emploiyes emploiyes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != emploiyes.IdEmploiye)
            {
                return BadRequest();
            }

            _context.Entry(emploiyes).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmploiyesExists(id))
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

        // POST: api/Emploiyes
        [HttpPost]
        public async Task<IActionResult> PostEmploiyes([FromBody] Emploiyes emploiyes)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Emploiyes.Add(emploiyes);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (EmploiyesExists(emploiyes.IdEmploiye))
                {
                    return new StatusCodeResult(StatusCodes.Status409Conflict);
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetEmploiyes", new { id = emploiyes.IdEmploiye }, emploiyes);
        }

        // DELETE: api/Emploiyes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmploiyes([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var emploiyes = await _context.Emploiyes.FindAsync(id);
            if (emploiyes == null)
            {
                return NotFound();
            }

            _context.Emploiyes.Remove(emploiyes);
            await _context.SaveChangesAsync();

            return Ok(emploiyes);
        }

        private bool EmploiyesExists(int id)
        {
            return _context.Emploiyes.Any(e => e.IdEmploiye == id);
        }
    }
}