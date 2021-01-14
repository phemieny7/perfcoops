<!DOCTYPE html>
    <html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <link href="{{asset('owner/css/page.min.css')}}" rel="stylesheet" >
        <!-- <link rel="stylesheet" href="{{asset('owner/css/app.css')}}"> -->
        <link rel="stylesheet" href="{{asset('owner/css/style.css')}}">
        
        <!-- favicon -->

        <!-- <link rel="apple-touch-icon" href="{{asset('owner/img/apple-touch-icon.html')}}">
        <link rel="icon" href="../assets/img/favicon.html"> -->
    </head>
    <body>
        <div id="root"></div>
        <script src="{{ asset('owner/js/app.js') }}"></script>
        <script src="{{ asset('owner/js/page.min.js') }}"></script>
    </body>
    </html>