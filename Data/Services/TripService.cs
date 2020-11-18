using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using Trips.Data.Models;

namespace Trips.Data.Services
{
    public class TripService : ITripService
    {
        public void AddTrip(Trip trip)
        {
            if(trip != null)
            {
                Data.Trips.Add(trip);
            }
        }

        public void DeleteTrip(int tripId)
        {
            Trip trip = Data.Trips.FirstOrDefault(x => x.Id == tripId);

            if(trip != null)
            {
                Data.Trips.Remove(trip);
            }
        }

        public List<Trip> GetAllTrips()
        {
            List<Trip> tripList = Data.Trips.ToList();

            return tripList;
        }

        public Trip GetTripById(int tripId)
        {
            Trip trip = Data.Trips.FirstOrDefault(x => x.Id == tripId);
            return trip;
        }

        public void UpdateTrip(int tripId, Trip trip)
        {
            Trip prevTrip = Data.Trips.FirstOrDefault(x => x.Id == tripId);

            if (prevTrip != null)
            {
                prevTrip.Name = trip.Name;
                prevTrip.DateCompleted = trip.DateCompleted;
                prevTrip.DateStarted = trip.DateStarted;
                prevTrip.Description = trip.Description;
            }
        }
    }
}
