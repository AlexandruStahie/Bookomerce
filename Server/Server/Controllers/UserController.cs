using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    public class UserController : Controller
    {
        private readonly MyDbContext _context;

        public UserController(MyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("api/User/Index")]
        public User Index()
        {
            User user = new User();
            return user;
        }

        [HttpGet]
        [Route("api/User/Login/{email}/{password}")]
        public User Login(string email, string password)
        {
            User item = _context.User.Where(t => t.Email == email && t.Password == password).FirstOrDefault(); //.Include(x => x.UserDetails)
            if (item != null)
            {
                item.Password = null;
            }
            return item;
        }
    }
}