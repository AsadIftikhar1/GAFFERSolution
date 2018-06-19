<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admin Area</title>
    <link rel="stylesheet" type="text/css" href="/DataTables/datatables.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/adminstyle.css"/>
    <link rel="stylesheet" href="/css/adminstyle.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" type="text/css" href="/css/stylesheet.css">  
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.css">
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
  </head>

  <body>
      <header>
         <div class="nav">
          <ul>
              
              <li class="dropdown">
               <a href="/admin/pages" class="dropbtn"><b>Pages</b></a>
               <div class="dropdown-content">
                </li>
              <li class="dropdown">
              <a href="/admin/categories" class="dropbtn"><b style="padding-left:40px;">Categories</b></a>
               <div class="dropdown-content">
             
              <li class="dropdown">
                  <a href="/admin/products" class="dropbtn">
              <b style="padding-left:40px;">Products</b></a>
               <div class="dropdown-content">
                
                </li>
          </ul>
          
                      </nav>

                      <br>
                 
          </header>
    <div class="container">
    
      
    
    






<h2 class="page-title">Edit a page</h2>
<a href="/admin/pages" class="btn btn-primary">Back to all pages</a>
<br><br>

<form method="POST" action="/admin/pages/edit-page/serviees">
    
    <div class="form-group">
        <label for="">Title</label>
        <input type="text" class="form-control" name="title" value="Services" placeholder="Title">
    </div>
    
    <div class="form-group">
        <label for="">Slug</label>
        <input type="text" class="form-control" name="slug" value="serviees" placeholder="Slug">
    </div>
    
    <div class="form-group">
        <label for="">Content</label>
        <textarea name="content" class="form-control" id="ta" cols="30" rows="10" placeholder="Content">&lt;p&gt;Services Content&lt;/p&gt;
</textarea>
    </div>

    <input type="hidden" name="id" value="11">
    
    <button class="btn btn-default">Submit</button>
</form>

</div><!-- /.container -->
<br><br><br>
<hr>
<p class="text-center">&COPY;RAMASCART</p>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="//cdn.ckeditor.com/4.7.1/standard/ckeditor.js"></script>
    <script src="/js/main.js"></script>
    <script>
       $(document).ready( function () {
      $('#table_id').DataTable();
  } );
</script>
 
  </body> 
</html>

