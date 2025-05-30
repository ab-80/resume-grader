using backend_api.Data;
using backend_api.DTOs;
using backend_api.Models;
using backend_api.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace backend_api.Services
{
    public class AuthService : IAuthService
    {
        private readonly ApplicationDbContext _context;

        public AuthService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> UserExistsAsync(string email)
        {
            return await _context.Users.AnyAsync(u => u.Email == email.ToLower());
        }

        public async Task<User> RegisterAsync(RegisterDTO dto)
        {
            using var hmac = new HMACSHA512();

            User user = new User
            {
                Email = dto.Email.ToLower(),
                PasswordSalt = hmac.Key,
                PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(dto.Password))
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return user;
        }

        public async Task<User> LoginAsync(LoginDTO dto)
        {
            var user = await _context.Users.SingleOrDefaultAsync(u => u.Email == dto.Email.ToLower());

            if (user == null)
                return null;

            using var hmac = new HMACSHA512(user.PasswordSalt);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(dto.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i])
                    return null;
            }

            return user;
        }
    }
}
