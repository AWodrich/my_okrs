
<!DOCTYPE html>
<html
    lang="de"
    class="no-js"
>
<head>
    <link
        rel="canonical"
        href="{{ config('app.url') }}"
    >

    {{--if a google analytics code and an optimize code are set, include this script in the head--}}

    <meta charset="utf-8">
    <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge"
    >
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
    >


    @yield('metatags')

    <script>
    window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>

    <style>
        .no-js [requires-js] {
            display: none !important;
        }


        .has-js [no-js] {
            display: none !important;
        }
    </style>
</head>
<body class="flex flex-col h-full font-sans">


<main class="flex-1">
    <div id="jsVueApp">
        @yield('content')

    </div>
</main>


@yield('vue-template-includes')


@section('styles')
    <link
        href="{{ mix('css/app.css') }}"
        rel="stylesheet"
    >
    <link
        rel="stylesheet"
        href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    >
@show

@section('scripts')

    <script>
    var root_url = '{{  Request::root() }}';
    </script>

    @if(Config::get('app.debug'))

    @else

    @endif
    @if(isset($appJS))
        <script
            rel="preload"
            src="{{ $appJS }}"
        ></script>
    @else
        <script
            rel="preload"
            src="{{ mix('js/app.js') }}"
        ></script>
        <script
            rel="preload"
            src="{{ mix('js/vendor.js') }}"
        ></script>
        <script
            rel="preload"
            src="{{ mix('js/manifest.js') }}"
        ></script>
    @endif

@show

</body>
</html>
