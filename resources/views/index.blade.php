@extends('layouts.default')

@section('metatags')

    @include('partials.share-tags', [
        'title' => 'MyOKRs',
        'description' => 'Your own platform to organise and plan your own okrs',
        'image_url' => ''
    ])

@stop

@section('imagepreload')
    {{-- Preload title image possibly with media queries --}}
@stop

@section('content')
    <main class="page-content">

        <home></home>
    </main>

    {{-- Include Page dependant Vue Templates here --}}

@stop
