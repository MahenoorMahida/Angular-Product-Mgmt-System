using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using userAPI2.Models;

namespace userAPI2.Controllers
{
   
    [RoutePrefix("Api/Product")]
        public class UserController : ApiController
        {
        pmsEntities proEntity = new pmsEntities();
            [HttpGet]
            [Route("AllproductDetails")]
            public IQueryable<Product> GetProduct()
            {
                try
                {
                    return proEntity.Products;
                }
                catch (Exception)
                {
                    throw;
                }
            }


            [HttpGet]
            [Route("GetproductDetailsById")]
            public IHttpActionResult GetProductById(int id)
            {
            int ProductID = id;
                Product obj = new Product();
                int ID = Convert.ToInt32(ProductID);
                try
                {
                    obj = proEntity.Products.Find(ID);
                    if (obj == null)
                    {
                        return NotFound();
                    }

                }
                catch (Exception)
                {
                    throw;
                }

                return Ok(obj);
            }
 
            [HttpPut]
            [Route("UpdateProductDetails")]
            public IHttpActionResult PutProductMaster(Product u)
            {
            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            try
                {
                proEntity.Entry(u).State = EntityState.Modified;
                proEntity.SaveChanges();
                /*              Product obj = new Product();
                              obj = proEntity.Products.Find(obj.ProductID);
                              if (obj != null)
                              {
                                  obj.ProductID = u.ProductID;
                                  obj.ProductName = u.ProductName;
                                  obj.ProductCategory = u.ProductCategory;
                                  obj.ProductPrice = u.ProductPrice;

                              int i = this.proEntity.SaveChanges();*/
            

                    

                }
                catch (Exception)
                {
                    throw;
                }
         
                return Ok(u);
            }

            //delete

            [HttpDelete]
            [Route("DeleteProductDetails")]
            public IHttpActionResult DeleteProductDelete(int id)
            {
                //int empId = Convert.ToInt32(id);
                Product u = proEntity.Products.Find(id);
                if (u == null)
                {
                    return NotFound();
                }

                proEntity.Products.Remove(u);
                proEntity.SaveChanges();

                return Ok(u);
            }
            //post

            [HttpPost]
            [Route("InsertProductDetails")]
            public IHttpActionResult PostProduct(Product data)
            {

                //if (!ModelState.IsValid)
                //{
                //    return BadRequest(ModelState);
                //}
                try
                {
                    proEntity.Products.Add(data);
                    proEntity.SaveChanges();
                }
                catch (Exception)
                {
                    throw;
                }



                return Ok(data);
            }



        }
    }

