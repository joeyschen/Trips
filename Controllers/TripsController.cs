using System;
using Microsoft.AspNetCore.Mvc;
using Trips.Data.Models;
using Trips.Data.Services;

namespace Trips.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TripsController : Controller
    {
        private ITripService _tripService;

        public TripsController(ITripService _tripService)
        {
            this._tripService = _tripService;
        }

        [HttpGet("[action]")]
        public IActionResult GetTrips()
        {
            try{
                // throw new Exception();

                var AllTrips = _tripService.GetAllTrips();

                if(AllTrips == null)
                {
                    return NotFound();
                }

                return Ok(AllTrips);

            } catch(Exception e){
                return BadRequest(e.Message);
            }
            
        }

        [HttpGet("GetTripById/{id}")]
        public IActionResult GetTripById(int id)
        {
            var trip = _tripService.GetTripById(id);

            if(trip == null)
            {
                return NotFound();
            }

            return Ok(trip);
        }


        [HttpPost("AddTrip")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            if(trip != null)
            {
                _tripService.AddTrip(trip);
            }

            return CreatedAtAction("AddTrip", trip);
        }

        [HttpPut("UpdateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody]Trip trip)
        {
            _tripService.UpdateTrip(id, trip);

            return Ok(trip);
        }

        [HttpDelete("DeleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            //if(tripId == null)
            //{
            //    return NotFound();
            //}

            _tripService.DeleteTrip(id);

            return Ok(id);
        }

    }
}
