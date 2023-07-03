using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProAtividade.API.Data;
using ProAtividade.API.Models;

namespace ProAtividade.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtividadeController : Controller
    {
        private readonly DataContext context;
        public AtividadeController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public List<Atividade> GetAll()
        {
            return context.Atividades.ToList();
        }

        [HttpGet("{id}")]
        public Atividade GetById(int id)
        {
            if (id != null)
            {
                var atividadeId = context.Atividades.SingleOrDefault(_ => _.Id == id);
                return atividadeId;
            }
            else
            {
                throw new Exception("Erro ao localizar o id");
            }

        }

        [HttpPost]
        public Atividade Post(Atividade atividade)
        {
            if (atividade != null)
            {
                var ativi = context.Atividades.Add(atividade).Entity;
                context.SaveChanges();
                return ativi;
            }
            else
            {
                throw new Exception("Erro ao adicionar atividade");
            }
        }

        [HttpPut]
        public Atividade Put(int id, Atividade atividade)
        {
            if (atividade.Id != id) throw new Exception("Voce está tentando atualizar a atividade errada");

            context.Update(atividade);
            context.SaveChanges();
            return atividade;
        }

        [HttpDelete("{id}")]
        public Atividade Delete(int id)
        {
            var atividadeId = GetById(id);
            context.Atividades.Remove(atividadeId);
            context.SaveChanges();
            return atividadeId;
        }


    }
}