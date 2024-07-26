import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectMongoDB()
    try {
        const topics = await Topic.find({})
        return NextResponse.json(
            topics, { status: 200 }
        )

    } catch (error) {
        return NextResponse.json({ error: error, }, { status: 404 })
    }
}

export async function POST(request) {
    const { title, description } = await request.json();
    await connectMongoDB()
    try {
        await Topic.create({ title, description })
        return NextResponse.json({ message: "Topic Created" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error, }, { status: 404 })
    }
}

export async function PUT(request, { params }) {
    const { id } = params;
    const { title: title, description: description } = await request.json();

    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description })
    return NextResponse.json({ message: "Topic updated" }, { status: 200 })
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMongoDB()
    try {
        await Topic.findByIdAndDelete(id)
        return NextResponse.json({ message: "Topic Deleted" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: error, }, { status: 404 })
    }
}