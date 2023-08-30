@extends('layouts.app')
@section('content')
<h1>Hello World</h1>


<div id="navigation"></div>
@endsection

<script>
    var data = {
        name: "{{ $data[0]}}",
        age: "{{ $data[1] }}"
    };
</script>
